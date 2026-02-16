{/* VIDEO THUMBNAIL */}
      <div className="video-thumbnail" onClick={() => setOpen(true)}>
        <img
          src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/hqdefault.jpg"
          alt="Play video"
        />
        <span className="play-icon">▶</span>
      </div>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
