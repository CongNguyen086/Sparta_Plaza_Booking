import React from 'react'
import galleryData from '../../../../_mocks/galleryPhotoMock'

const gallery = galleryData.map(data => (
    <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src={data.expanded}>
        <div className="vk-gallery-item-img">
            <img src={data.main} alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div>
))

export default function Gallery() {
    return (
        <div className="vk-sparta-image-gallery">
            <div className="vk-sparta-image-gallery-img">
                <div id="lightgallery">
                    {gallery}
                </div>
            </div>
            <div className="vk-sparta-image-gallery-text">
                <span><a href="02_03_gallery_grid_full_width.html">GALLERY</a></span>
            </div>
        </div>
    )
}

{/* <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src={gallery_1_1}>
    <div className="vk-gallery-item-img">
        <img src={gallery_1} alt="" className="img-responsive" />
        <div className="vk-item-caption">
            <div className="featured-slider-overlay" />
            <div className="vk-item-caption-text">
                <h2>Master Chef</h2>
                <h4>Restaurant</h4>
            </div>
        </div>
    </div>
</div>
    <div className="col-md-2  col-md-6 col-xs-6 vk-clear-padding" data-src={gallery_1_2}>
        <div className="vk-gallery-item-img">
            <img src={gallery_2} alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src="../CustomerLayout/images/01_01_default/gallery/1-3.jpg">
        <div className="vk-gallery-item-img">
            <img src="../CustomerLayout/images/01_01_default/gallery/3.jpg" alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src="../CustomerLayout/images/01_01_default/gallery/1-4.jpg">
        <div className="vk-gallery-item-img">
            <img src="../CustomerLayout/images/01_01_default/gallery/4.jpg" alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src="../CustomerLayout/images/01_01_default/gallery/1-5.jpg">
        <div className="vk-gallery-item-img">
            <img src="../CustomerLayout/images/01_01_default/gallery/5.jpg" alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-2 col-md-6 col-xs-6 vk-clear-padding" data-src="../CustomerLayout/images/01_01_default/gallery/1-6.jpg">
        <div className="vk-gallery-item-img">
            <img src="../CustomerLayout/images/01_01_default/gallery/6.jpg" alt="" className="img-responsive" />
            <div className="vk-item-caption">
                <div className="featured-slider-overlay" />
                <div className="vk-item-caption-text">
                    <h2>Master Chef</h2>
                    <h4>Restaurant</h4>
                </div>
            </div>
        </div>
    </div> */}
