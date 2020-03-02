const HomeBlog = (props) =>{
    return(
        <section class="blog-area ptb-100 pb-0">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Our Blog</span>
                    <h2>News And Insights</h2>
                    <p> {props.data.blogHeader} </p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="#"><img src="assets/img/services-image/1.jpg" alt="image"/></a>

                                <div class="date"><i class="flaticon-timetable"></i> Oct 14, 2040</div>
                            </div>

                            <div class="post-content">
                                <h3><a href="#">2020 Insurance Trends And Possible Challenges</a></h3>
                                <p>Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <a href="#" class="default-btn">Read More <span></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="#"><img src="assets/img/services-image/2.jpg" alt="image"/></a>

                                <div class="date"><i class="flaticon-timetable"></i> Oct 10, 2090</div>
                            </div>

                            <div class="post-content">
                                <h3><a href="#">Global Trends in the Life Insurance Industry</a></h3>
                                <p>Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <a href="#" class="default-btn">Read More <span></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div class="single-blog-post">
                            <div class="post-image">
                                <a href="#"><img src="assets/img/services-image/3.jpg" alt="image"/></a>

                                <div class="date"><i class="flaticon-timetable"></i> Feb 13, 2020</div>
                            </div>

                            <div class="post-content">
                                <h3><a href="#">The Best Car Insurance Companies in 2020</a></h3>
                                <p>Luis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <a href="#" class="default-btn">Read More <span></span></a>
                            </div>
                        </div>
                    </div>

                    {/* <div class="col-lg-12 col-md-12">
                        <div class="blog-notes">
                            <p>Insights to help you do what you do better, faster and more profitably. <a href="#">Read Full Blog</a></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HomeBlog