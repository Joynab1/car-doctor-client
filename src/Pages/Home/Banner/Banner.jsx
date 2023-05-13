import React from 'react';
import bannerImg1 from '../../../assets/images/banner/1.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/4.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerImg1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">

                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Most Affordable Price for Car Servicing</h2>
                        <p>There are many variation of passages of available, but majority have suffered alteration in some form</p>
                        <div>
                            <Link><button className="btn btn-active btn-accent mr-5">Discover more</button>
                            </Link>
                            <Link><button className="btn btn-outline btn-accent">Most Project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:bg-cyan-600">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-cyan-600">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerImg2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Most Affordable Price for Car Servicing</h2>
                        <p>There are many variation of passages of available, but majority have suffered alteration in some form</p>
                        <div>
                            <Link><button className="btn btn-active btn-accent mr-5">Discover more</button>
                            </Link>
                            <Link><button className="btn btn-outline btn-accent">Most Project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle hover:bg-cyan-600">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-cyan-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerImg3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Most Affordable Price for Car Servicing</h2>
                        <p>There are many variation of passages of available, but majority have suffered alteration in some form</p>
                        <div>
                            <Link><button className="btn btn-active btn-accent mr-5">Discover more</button>
                            </Link>
                            <Link><button className="btn btn-outline btn-accent">Most Project</button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-cyan-600">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-cyan-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerImg4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba (21, 21, 21, 0)]">
                <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Most Affordable Price for Car Servicing</h2>
                        <p>There are many variation of passages of available, but majority have suffered alteration in some form</p>
                        <div>
                            <Link><button className="btn btn-active btn-accent mr-5">Discover more</button>
                            </Link>
                            <Link><button className="btn btn-outline btn-accent">Most Project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:bg-cyan-600">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-cyan-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;