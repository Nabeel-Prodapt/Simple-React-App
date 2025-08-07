import React from "react";

function Gallery() {
    // Sample image URLs (you can replace with your own or fetch dynamically)
    const images = [
        "https://picsum.photos/300/200?random=1",
        "https://picsum.photos/300/200?random=2",
        "https://picsum.photos/300/200?random=3",
        "https://picsum.photos/300/200?random=4",
        "https://picsum.photos/300/200?random=5",
        "https://picsum.photos/300/200?random=6",
    ];

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">🖼️ Gallery</h1>

            <div className="row">
                {images.map((img, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <img src={img} className="card-img-top" alt={`Gallery ${index}`} />
                            <div className="card-body text-center">
                                <p className="card-text">Image {index + 1}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;