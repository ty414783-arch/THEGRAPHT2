export const viewerModal = () => `
      let hasDraggedOrMoved = false;
      let dragOnImageTarget = false;

      const startDragging = (clientX, clientY, targetEl) => {
        isMouseDragging = true;
        hasDraggedOrMoved = false;
        dragOnImageTarget = Boolean(targetEl && (targetEl.closest("#viewer-modal-image, .viewer-modal-image") || targetEl.id === "viewer-modal-image"));
        dragStartX = clientX;
        dragStartY = clientY;
        dragInitialPanX = viewerPanX;
        dragInitialPanY = viewerPanY;
        viewerModalImage.classList.add("dragging");
      };

      const updateDragging = (clientX, clientY) => {
        if (!isMouseDragging || !viewerModal.classList.contains("open")) return;
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
          hasDraggedOrMoved = true;
        }
        viewerPanX = dragInitialPanX + dx;
        viewerPanY = dragInitialPanY + dy;
        applyViewerRect(getViewerTargetRect(), viewerZoom, 24, viewerPanX, viewerPanY);
      };

      const endDragging = () => {
        if (!isMouseDragging) return;
        isMouseDragging = false;
        viewerModalImage.classList.remove("dragging");

        if (viewerZoom <= 1.01) {
          const totalDragDist = Math.hypot(viewerPanX, viewerPanY);
          if (totalDragDist > 120) {
            closeViewerModal();
          } else {
            if (typeof resetViewerPosition === "function") {
              resetViewerPosition(true);
            }
          }
        }
      };

      // Mouse Pan / Drag
      viewerModalImage.addEventListener("mousedown", (e) => {
        if (e.button !== 0 || !viewerModal.classList.contains("open")) return;
        e.preventDefault();
        e.stopPropagation();
        startDragging(e.clientX, e.clientY, e.target);
      });

      viewerModalImage.addEventListener("dblclick", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (viewerZoom > 1.1) {
          setViewerZoom(1.0);
        } else {
          setViewerZoom(2.2);
        }
      });

      if (viewerModalStage) {
        viewerModalStage.addEventListener("mousedown", (e) => {
          if (e.button !== 0 || !viewerModal.classList.contains("open")) return;
          const target = e.target;
          if (target.closest(".viewer-modal-header") || target.closest(".viewer-zoom-chip") || target.closest("#viewer-modal-close") || target.closest("#viewer-modal-download")) return;
          e.preventDefault();
          startDragging(e.clientX, e.clientY, target);
        });
      }

      window.addEventListener("mousemove", (e) => {
        updateDragging(e.clientX, e.clientY);
      });

      window.addEventListener("mouseup", () => {
        endDragging();
      });

      // Mobile Touch Pinch-to-Zoom & Pan
      const targetStage = viewerModalStage || viewerModal;
      let pinchStartDist = 0;
      let initialPinchZoom = 1;
      let isTouchDragging = false;
      let lastTapTime = 0;

      if (targetStage) {
        targetStage.addEventListener("touchstart", (e) => {
          if (!viewerModal.classList.contains("open")) return;
          e.preventDefault();

          if (e.touches.length === 2) {
            isTouchDragging = false;
            pinchStartDist = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );
            initialPinchZoom = viewerZoom;
            viewerModalImage.classList.add("dragging");
          } else if (e.touches.length === 1) {
            const now = Date.now();
            const t = e.touches[0];

            if (now - lastTapTime < 300) {
              lastTapTime = 0;
              if (viewerZoom > 1.1) {
                setViewerZoom(1.0);
              } else {
                setViewerZoom(2.2);
              }
              return;
            }
            lastTapTime = now;

            isTouchDragging = true;
            hasDraggedOrMoved = false;
            dragStartX = t.clientX;
            dragStartY = t.clientY;
            dragInitialPanX = viewerPanX;
            dragInitialPanY = viewerPanY;
            viewerModalImage.classList.add("dragging");
          }
        }, { passive: false });

        targetStage.addEventListener("touchmove", (e) => {
          if (!viewerModal.classList.contains("open")) return;
          e.preventDefault();
          e.stopPropagation();

          if (e.touches.length === 2 && pinchStartDist > 0) {
            const currentDist = Math.hypot(
              e.touches[0].clientX - e.touches[1].clientX,
              e.touches[0].clientY - e.touches[1].clientY
            );
            const scaleFactor = currentDist / pinchStartDist;
            setViewerZoom(initialPinchZoom * scaleFactor);
          } else if (e.touches.length === 1 && isTouchDragging) {
            const t = e.touches[0];
            const dx = t.clientX - dragStartX;
            const dy = t.clientY - dragStartY;
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
              hasDraggedOrMoved = true;
            }
            viewerPanX = dragInitialPanX + dx;
            viewerPanY = dragInitialPanY + dy;
            applyViewerRect(getViewerTargetRect(), viewerZoom, 24, viewerPanX, viewerPanY);
          }
        }, { passive: false });

        targetStage.addEventListener("touchend", (e) => {
          if (e.touches.length < 2) {
            pinchStartDist = 0;
          }
          if (e.touches.length === 0) {
            if (isTouchDragging) {
              isTouchDragging = false;
              viewerModalImage.classList.remove("dragging");

              if (viewerZoom <= 1.01) {
                const totalDragDist = Math.hypot(viewerPanX, viewerPanY);
                if (totalDragDist > 120) {
                  closeViewerModal();
                } else {
                  if (typeof resetViewerPosition === "function") {
                    resetViewerPosition(true);
                  }
                }
              }
            }
          }
        }, { passive: true });
      }

      messageList.addEventListener("click", (event) => {
        const groupAvatarHit = event.target instanceof Element ? event.target.closest(".group-incoming-avatar-hit[data-sender-id]") : null;
        if (groupAvatarHit) {
          const senderId = String(groupAvatarHit.getAttribute("data-sender-id") || "").trim();
          if (senderId) {
            void openDirectDialogForUser(senderId, { openProfile: true });
          }
          return;
        }

        const imageLink = event.target instanceof Element ? event.target.closest(".message-image-link") : null;

        if (!imageLink) {
          return;
        }

        event.preventDefault();
        const imageNode = imageLink.querySelector(".message-image");
        const imageRect = imageNode?.getBoundingClientRect();
        openViewerModal({
          src: imageLink.getAttribute("data-image-url") || "",
          fallbackSrc: imageLink.getAttribute("data-image-fallback-url") || "",
          senderName: imageLink.getAttribute("data-sender-name") || "TheGraphT",
          senderId: imageLink.getAttribute("data-sender-id") || "",
          createdAt: imageLink.getAttribute("data-created-at") || "",
          sourceRect: imageRect
            ? {
                left: imageRect.left + imageRect.width / 2,
                top: imageRect.top + imageRect.height / 2,
                width: imageRect.width,
                height: imageRect.height
              }
            : null
        });
      });

      messageList.addEventListener("dragstart", (event) => {
        const target = event.target instanceof Element ? event.target : null;
        if (!target) {
          return;
        }
        if (target.closest(".message-image, .message-image-link, .message-album-item")) {
          event.preventDefault();
        }
      });

      messageList.addEventListener("auxclick", (event) => {
        const imageLink = event.target instanceof Element ? event.target.closest(".message-image-link") : null;
        if (!imageLink) {
          return;
        }
        event.preventDefault();
      });

      viewerModalClose.addEventListener("click", () => {
        closeViewerModal();
      });

      viewerModal.addEventListener("click", (event) => {
        if (hasDraggedOrMoved) {
          hasDraggedOrMoved = false;
          dragOnImageTarget = false;
          return;
        }
        const target = event.target instanceof Element ? event.target : null;

        if (!target) {
          dragOnImageTarget = false;
          return;
        }

        if (
          dragOnImageTarget ||
          target.closest("#viewer-modal-image") ||
          target.closest(".viewer-modal-image") ||
          target.closest(".viewer-modal-header") ||
          target.closest(".viewer-zoom-chip")
        ) {
          dragOnImageTarget = false;
          return;
        }

        dragOnImageTarget = false;
        closeViewerModal();
      });

      viewerModal.addEventListener("wheel", handleViewerWheelZoom, { passive: false });
      viewerModalStage.addEventListener("wheel", handleViewerWheelZoom, { passive: false });
      viewerModalImage.addEventListener("wheel", handleViewerWheelZoom, { passive: false });

      viewerZoomOut.addEventListener("click", () => {
        if (!viewerModal.classList.contains("open")) {
          return;
        }
        setViewerZoom(viewerZoom - 0.2);
      });

      viewerZoomIn.addEventListener("click", () => {
        if (!viewerModal.classList.contains("open")) {
          return;
        }
        setViewerZoom(viewerZoom + 0.2);
      });
`;
