import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Citytours - Premium site template for city tours agencies, transfers and tickets."
        />
        <meta name="author" content="Ansonika" />
        <title>Hotel Apple Inn</title>
        {/* Favicons*/}
        <link
          rel="shortcut icon"
          href="assets/images/appleinn_logo.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          href="assets/images/appleinn_logo.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="72x72"
          href="assets/images/appleinn_logo.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="114x114"
          href="assets/images/appleinn_logo.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon"
          sizes="144x144"
          href="assets/images/appleinn_logo.png"
        />
        {/* GOOGLE WEB FONT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* COMMON CSS */}
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/vendors.css" rel="stylesheet" />
        {/* CUSTOM CSS */}
        <link href="assets/css/custom.css" rel="stylesheet" />
        <link href="assets/css/ensober_custom.css" rel="stylesheet" />
        <link href="assets/css/input-icon.css" rel="stylesheet" />
        {/*  */}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n        .main-nav-head{\n            text-align: right;\n        }\n    "
          }}
        />

      </Head>

    
      {/* Header================================================== */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div id="logo_home">
                <h1>
                  <a href="index.html" title="City tours travel template">
                    City Tours travel template
                  </a>
                </h1>
              </div>
            </div>
            <nav className="col-9 main-nav-head">
              <a
                className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                href="javascript:void(0);"
              >
                <span>Menu mobile</span>
              </a>
              <div className="main-menu">
                <div id="header_menu">
                  <img
                    src="assets/images/appleinn_logo.png"
                    width={160}
                    height={34}
                    alt="City tours"
                  />
                </div>
                <a href="#" className="open_close" id="close_in">
                  <i className="icon_set_1_icon-77" />
                </a>
                <ul>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">
                      <i
                        className="icon-home-1 icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Home{" "}
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">
                      <i
                        className="icon-home-outline icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Hotel Info{" "}
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">
                      <i
                        className="icon-call icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Contact Us{" "}
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">
                      <i
                        className="icon-map-1 icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Map{" "}
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">
                      <i
                        className="icon-comment-1 icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Reviews
                    </a>
                  </li>
                  <li className="megamenu submenu">
                    <a href="javascript:void(0);" className="show-submenu-mega">
                      <i
                        className="icon-calendar-outlilne icon-img-i"
                        style={{ color: "red", fontSize: 16 }}
                      />
                      <br />
                      Cancel Bookings
                    </a>
                  </li>
                </ul>
              </div>
              {/* End main-menu */}
              {/* */}
            </nav>
          </div>
        </div>
        {/* container */}
      </header>
      {/* End Header */}
      <section
        id="hero"
        className="background-image"
      >
        <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
          <div className="intro_title">
            <h3 className="animated fadeInDown">Affordable Paris tours</h3>
            <p className="animated fadeInDown">
              CITY TOURS / TOUR TICKETS / TOUR GUIDES
            </p>
            <a href="#" className="animated fadeInUp button_intro">
              View Tours
            </a>{" "}
            <a href="#" className="animated fadeInUp button_intro outline">
              View Tickets
            </a>
          </div>
        </div>
        {/* End opacity-mask*/}
      </section>
      {/* End section */}
      <main>
        {/* <div class="collapse" id="collapseMap">
              <div id="map" class="map"></div>
          </div> */}
        {/* End Map */}
        <div className="container-fluid margin_b_60">
          <div className="row">
            <div className="col-lg-9">
              <div className="main_title">
                <h1>
                  Classic - <span>Valley View</span>
                  <p className="room_c_inline">
                    Room Count:<span style={{ color: "#e04f67" }}>10</span>
                  </p>
                </h1>
              </div>
              <div className="room_type_main">
                <div
                  className="strip_all_tour_list wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4" style={{"position":"relative"}}>
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div className="wishlist">
                        <a
                          className="tooltip_flip tooltip-effect-1"
                          href="javascript:void(0);"
                        >
                          +
                          <span className="tooltip-content-flip">
                            <span className="tooltip-back">Add to wishlist</span>
                          </span>
                        </a>
                      </div>
                      <div className="img_list">
                        <a href="WHIRLPOOL_SUITE.html">
                          <img
                            src="assets/images/slider_single_tour/appleinn_4.jpeg"
                            alt="Image"
                          />
                          <div className="short_info" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="tour_list_desc">
                            <h5 className="room_ame_title">
                              <i className=" icon-chart-alt" /> Valley View Room{" "}
                              <br />
                              <p className="allow_c_inline">
                                04 Guests{" "}
                                <span style={{ fontSize: 10 }}>(Adult+Kids)</span>
                              </p>
                            </h5>
                            <ul className="add_info">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Plasma TV with cable channels"
                                >
                                  <i className="icon_set_2_icon-116" />
                                </a>
                                LCD TV
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_1_icon-58" />
                                </a>
                                Restaurant
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className=" icon_set_2_icon-106" />
                                </a>
                                Intercom
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-104" />
                                </a>
                                King Size Bed
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-114" />
                                </a>
                                Additional Bedding
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-118" />
                                </a>
                                Geyser
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7 room_rate_main">
                          {/* === EP === */}
                          <div className="room_rate" id="ep_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price ep_price_2_val"
                                    id="eppricenmrg_text_2599"
                                  >
                                    2999
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_2599"
                                  defaultValue={2999}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price ep_price_2_val_offer"
                                  id="epprice_text_2599"
                                >
                                  2599
                                </b>
                                /- EP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_2599"
                                  defaultValue={2599}
                                />
                              </div>
                              <span className="meal_type_des">Room Only</span>
                              <div id="room_ep_detail_2599"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_2599"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_2599"
                                className="btn_1 btn_1_2599 room_book"
                                onclick={add_card_ep(2599)}
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /EP === */}
                          {/* === CP === */}
                          <div className="room_rate" id="cp_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price cp_price_2_val"
                                    id="eppricenmrg_text_2999"
                                  >
                                    3499
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_2999"
                                  defaultValue={3499}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price cp_price_2_val_offer"
                                  id="epprice_text_2999"
                                >
                                  2999
                                </b>
                                /- CP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_2999"
                                  defaultValue={2999}
                                />
                              </div>
                              <span className="meal_type_des">With Breakfast</span>
                              <div id="room_ep_detail_2999"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_2999"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_2999"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(2999)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /CP === */}
                          {/* === MAP === */}
                          <div className="room_rate" id="map_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price map_price_2_val"
                                    id="eppricenmrg_text_3599"
                                  >
                                    3999
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_3599"
                                  defaultValue={3999}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price map_price_2_val_offer"
                                  id="epprice_text_3599"
                                >
                                  3599
                                </b>
                                /- MAP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_3599"
                                  defaultValue={3599}
                                />
                              </div>
                              <span className="meal_type_des">
                                With Breakfast &amp; Dinner
                              </span>
                              <div id="room_ep_detail_3599"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_3599"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_3599"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(3599)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /MAP === */}
                          {/* === AP === */}
                          <div className="room_rate" id="ap_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price ap_price_2_val"
                                    id="eppricenmrg_text_3999"
                                  >
                                    4499
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_3999"
                                  defaultValue={4499}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price ap_price_2_val_offer"
                                  id="epprice_text_3999"
                                >
                                  3999
                                </b>
                                /- AP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_3999"
                                  defaultValue={3999}
                                />
                              </div>
                              <span className="meal_type_des">
                                With Breakfast, Lunch &amp; Dinner
                              </span>
                              <div id="room_ep_detail_3999"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_3999"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_3999"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(3999)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /AP === */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="view_details_area row"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-lg-4 col-md-4">
                      <a href="javascript:void(0);" className="open_gallery">
                        View Images
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <a href="javascript:void(0);" className="open_video">
                        View Video
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <a href="WHIRLPOOL_SUITE.html"> View Full Details </a>
                    </div>
                  </div>
                  {/* Gallery Popup */}
                  <div className="room_type_gallery">
                    <div
                      id="myCarousel1"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Indicators */}
                      <ol className="carousel-indicators">
                        <li
                          data-target="#myCarousel1"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#myCarousel1" data-slide-to={1} />
                        <li data-target="#myCarousel1" data-slide-to={2} />
                      </ol>
                      {/* Wrapper for slides */}
                      <div className="carousel-inner">
                        <div className="item active">
                          <img
                            src="assets/images/slider_single_tour/appleinn_4.jpeg"
                            alt="Los Angeles"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="item">
                          <img
                            src="assets/images/slider_single_tour/appleinn_5.jpeg"
                            alt="Chicago"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="item">
                          <img
                            src="assets/images/slider_single_tour/appleinn_1.jpeg"
                            alt="New york"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      {/* Left and right controls */}
                      <a
                        className="left carousel-control"
                        href="#myCarousel1"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#myCarousel1"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  {/* Gallery Popup */}
                  {/* Video Popup */}
                  <div className="room_type_video">
                    <iframe
                      width={727}
                      height={409}
                      src="https://www.youtube.com/embed/DkZSGAJ_Uw8"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </div>
                  {/* Video Popup */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="col-right-card" id="summary_head">
                <div className="filter-bk_summery">
                  <p>Booking Summary</p>
                </div>
              </div>
              <div className="col-right-card vres-bookdiv" id="booking_summery_blk">
                <div className="booking-section">
                  <div
                    className="vres-roombooked room_summary vres-booked-dis"
                    id="room_summary"
                    style={{ display: "block" }}
                  >
                    <input type="hidden" id="totroomcnt" defaultValue={1} />
                    <ul>
                      <li className="rooms-added">1 Rooms Added</li>
                      {/*Chinmay Gandhi - 1.0.53.61 - UX changes : release_add-room-footer */}
                      <li
                        id="checkin_summ_blk"
                        className="roomSummery-dates"
                        style={{ display: "list-item" }}
                      >
                        <label className="bs-lbl">Dates</label>{" "}
                        <span className="bs-chkinout">
                          <span id="_checkin">18/10/2022</span> -{" "}
                          <span id="_checkout">19/10/2022</span>
                        </span>
                      </li>
                      <li
                        id="night_summ_blk"
                        className="roomSummery-night"
                        style={{ display: "list-item" }}
                      >
                        <label className="bs-lbl">
                          <span id="_nightlbl">Night</span>
                          <span id="_totalnights" className="bs-night">
                            1
                          </span>
                        </label>
                      </li>
                      <li id="summary_row_clone" style={{ display: "none" }}>
                        <span className="fl-left">
                          <span>Valley View Room </span>
                          <br />
                          <small>
                            <b className="roomSummery_pax">
                              <span>
                                <div
                                  className="summeryPaxinfo"
                                  style={{ display: "inline-block" }}
                                >
                                  2 Adults
                                </div>
                                <div
                                  className="summeryPaxinfo"
                                  style={{ display: "inline-block" }}
                                >
                                  0 Kids
                                </div>
                                <div
                                  className="summeryPaxinfo"
                                  style={{ display: "inline-block" }}
                                >
                                  1 Room
                                </div>
                              </span>
                            </b>
                            <a href="javascript:void(0);">
                              <i
                                className="icon-edit-1 icon-img-i"
                                id="edit_row "
                              />
                            </a>
                          </small>
                        </span>
                        <p className="fl-left">
                          <span className="currency currency-rate">Rs</span>3,575.00
                          <span className="currency currency-rate" />
                          {/*Chinmay Gandhi - 1.0.53.61 - UX changes : release_add-room-footer */}
                        </p>
                        <i className="icon-close" id="delete_row" />
                      </li>
                      <div
                        id="summ_add"
                        className="collapse"
                        style={{ display: "inline-block" }}
                      >
                        <li id="summ_row_0" className="highlight_ths_row">
                          <span className="fl-left">
                            <span>
                              Direct Booker Deal - Pool View Room with Breakfast
                            </span>
                            <br />
                            <small>
                              <b className="roomSummery_pax">
                                <span>
                                  <div
                                    className="summeryPaxinfo"
                                    style={{ display: "inline-block" }}
                                  >
                                    2 Adults
                                  </div>
                                  <div
                                    className="summeryPaxinfo"
                                    style={{ display: "inline-block" }}
                                  >
                                    {" "}
                                    0 Child
                                  </div>
                                  <div
                                    className="summeryPaxinfo"
                                    style={{ display: "inline-block" }}
                                  >
                                    {" "}
                                    1 Room
                                  </div>
                                </span>
                              </b>
                              <a href="javascript:void(0);">
                                <i
                                  className="icon-edit-1 fa icon-img-i"
                                  id="edit_row_0"
                                />
                              </a>
                            </small>
                          </span>
                          <p className="fl-left">
                            <span className="currency currency-rate">Rs</span>
                            3,575.00
                            <span className="currency currency-rate" />
                            {/*Chinmay Gandhi - 1.0.53.61 - UX changes : release_add-room-footer */}
                          </p>
                          <i className="icon-cancel fa" id="delete_row_0" />
                        </li>
                      </div>
                      {/*Chinmay Gandhi - 1.0.53.61 - UX changes : release_add-room-footer */}
                    </ul>
                    <div
                      className="vres-total"
                      id="vres-total"
                      style={{ display: "inline-block" }}
                    >
                      {/* <i class="fa exp-rooms collapse" aria-hidden="true"></i> */}
                      <i className="vres-stripe info" aria-hidden="true" />
                      <span>
                        <i>Total</i>
                        <b className="fl-right">
                          <span id="grand_total">
                            <span className="currency">Rs</span> 3,575.00
                          </span>
                        </b>
                      </span>
                      <a
                        aria-label="Book Room. Continue to billing page."
                        href="javascript:void(0);"
                        name="bookingmulbtn"
                        id="bookingmulbtn"
                        className="subhead-btn bknow"
                        style={{ marginTop: 15 }}
                      >
                        {" "}
                        Book
                      </a>{" "}
                      {/* Chandrakant - 01 October 2022 - RES-3133 - L_BookToBilling added */}
                      <p id="err_child_age" className="err_child_age" />
                    </div>
                  </div>
                  <div
                    className="no-roomdiv"
                    id="no_room_selected"
                    style={{ display: "none" }}
                  >
                    <span className="vres-stripe be-noroom" />
                    <h3>
                      No Room(s)
                      <br />
                      <small>Selected</small>
                    </h3>
                    <div id="lookinguser" className="user_alert"></div>
                  </div>
                </div>
              </div>
              {/* End Room Type */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="main_title">
                <h1>
                  Deluxe - <span>Valley View</span>
                  <p className="room_c_inline">
                    Room Count:<span style={{ color: "#e04f67" }}>10</span>
                  </p>
                </h1>
              </div>
              <div className="room_type_main">
                <div
                  className="strip_all_tour_list wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4" style={{"position":"relative"}}>
                      <div className="ribbon_3 popular">
                        <span>Popular</span>
                      </div>
                      <div className="wishlist">
                        <a
                          className="tooltip_flip tooltip-effect-1"
                          href="javascript:void(0);"
                        >
                          +
                          <span className="tooltip-content-flip">
                            <span className="tooltip-back">Add to wishlist</span>
                          </span>
                        </a>
                      </div>
                      <div className="img_list">
                        <a href="WHIRLPOOL_SUITE.html">
                          <img
                            src="assets/images/slider_single_tour/appleinn_4.jpeg"
                            alt="Image"
                          />
                          <div className="short_info" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="tour_list_desc">
                            <h5 className="room_ame_title">
                              <i className=" icon-chart-alt" /> Valley View Room{" "}
                              <br />
                              <p className="allow_c_inline">
                                04 Guests{" "}
                                <span style={{ fontSize: 10 }}>(Adult+Kids)</span>
                              </p>
                            </h5>
                            <ul className="add_info">
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Plasma TV with cable channels"
                                >
                                  <i className="icon_set_2_icon-116" />
                                </a>
                                LCD TV
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_1_icon-58" />
                                </a>
                                Restaurant
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className=" icon_set_2_icon-106" />
                                </a>
                                Intercom
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-104" />
                                </a>
                                King Size Bed
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-114" />
                                </a>
                                Additional Bedding
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="tooltip-1"
                                  data-placement="top"
                                  title="Restaurant"
                                >
                                  <i className="icon_set_2_icon-118" />
                                </a>
                                Geyser
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7 room_rate_main">
                          {/* === EP === */}
                          <div className="room_rate" id="ep_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price ep_price_2_val"
                                    id="eppricenmrg_text_3000"
                                  >
                                    3500
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_3000"
                                  defaultValue={3500}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price ep_price_2_val_offer"
                                  id="epprice_text_3000"
                                >
                                  3000
                                </b>
                                /- EP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_3000"
                                  defaultValue={3000}
                                />
                              </div>
                              <span className="meal_type_des">Room Only</span>
                              <div id="room_ep_detail_3000"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_3000"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_3000"
                                className="btn_1 btn_1_2599 room_book"
                                onClick={() => add_card_ep(3000)}
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /EP === */}
                          {/* === CP === */}
                          <div className="room_rate" id="cp_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price cp_price_2_val"
                                    id="eppricenmrg_text_3500"
                                  >
                                    4000
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_3500"
                                  defaultValue={4000}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price cp_price_2_val_offer"
                                  id="epprice_text_3500"
                                >
                                  3500
                                </b>
                                /- CP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_3500"
                                  defaultValue={3500}
                                />
                              </div>
                              <span className="meal_type_des">With Breakfast</span>
                              <div id="room_ep_detail_3500"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_3500"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_3500"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(3500)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /CP === */}
                          {/* === MAP === */}
                          <div className="room_rate" id="map_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price map_price_2_val"
                                    id="eppricenmrg_text_4000"
                                  >
                                    4500
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_4000"
                                  defaultValue={4500}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price map_price_2_val_offer"
                                  id="epprice_text_4000"
                                >
                                  4000
                                </b>
                                /- MAP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_4500"
                                  defaultValue={4000}
                                />
                              </div>
                              <span className="meal_type_des">
                                With Breakfast &amp; Dinner
                              </span>
                              <div id="room_ep_detail_4000"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_4000"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_4000"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(4000)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /MAP === */}
                          {/* === AP === */}
                          <div className="room_rate" id="ap_price_2">
                            <div className="price_list_area">
                              <div className="room_rate_price">
                                <span className="normal_price_list">
                                  <i
                                    className="icon-rupee"
                                    style={{ fontSize: 21, marginRight: "-5px" }}
                                  />
                                  <span
                                    className="total_price ap_price_2_val"
                                    id="eppricenmrg_text_4500"
                                  >
                                    5000
                                  </span>
                                </span>
                                <input
                                  type="hidden"
                                  name="eppricenmrg"
                                  id="eppricenmrg_4500"
                                  defaultValue={5000}
                                />
                              </div>
                              <div className="room_rate_offe_price">
                                <b
                                  className="price ap_price_2_val_offer"
                                  id="epprice_text_4500"
                                >
                                  4500
                                </b>
                                /- AP
                                <input
                                  type="hidden"
                                  name="epprice"
                                  id="epprice_4500"
                                  defaultValue={4500}
                                />
                              </div>
                              <span className="meal_type_des">
                                With Breakfast, Lunch &amp; Dinner
                              </span>
                              <div id="room_ep_detail_4500"></div>
                            </div>
                            <div className="room_rate_select">
                              <div
                                className="counter_main"
                                id="ep_price_4500"
                              ></div>
                              <a
                                href="javascript:void(0);"
                                id="select-room-classic_4500"
                                className="btn_1 btn_1_2599 room_book"
                                onclick="add_card_ep(4500)"
                              >
                                Add Rooms
                              </a>
                            </div>
                          </div>
                          {/* === /AP === */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="view_details_area row"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-lg-4 col-md-4">
                      <a href="javascript:void(0);" className="open_gallery">
                        View Images
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <a href="javascript:void(0);" className="open_video">
                        View Video
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <a href="WHIRLPOOL_SUITE.html"> View Full Details </a>
                    </div>
                  </div>
                  {/* Gallery Popup */}
                  <div className="room_type_gallery">
                    <div
                      id="myCarousel1"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Indicators */}
                      <ol className="carousel-indicators">
                        <li
                          data-target="#myCarousel1"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#myCarousel1" data-slide-to={1} />
                        <li data-target="#myCarousel1" data-slide-to={2} />
                      </ol>
                      {/* Wrapper for slides */}
                      <div className="carousel-inner">
                        <div className="item active">
                          <img
                            src="assets/images/slider_single_tour/appleinn_4.jpeg"
                            alt="Los Angeles"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="item">
                          <img
                            src="assets/images/slider_single_tour/appleinn_5.jpeg"
                            alt="Chicago"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="item">
                          <img
                            src="assets/images/slider_single_tour/appleinn_1.jpeg"
                            alt="New york"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      {/* Left and right controls */}
                      <a
                        className="left carousel-control"
                        href="#myCarousel1"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#myCarousel1"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  {/* Gallery Popup */}
                  {/* Video Popup */}
                  <div className="room_type_video">
                    <iframe
                      width={727}
                      height={409}
                      src="https://www.youtube.com/embed/DkZSGAJ_Uw8"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </div>
                  {/* Video Popup */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Room Type */}
      </main>

      <Script src="assets/js/jquery.min.js"></Script>
      <Script src="assets/js/bootstrap.min.js"></Script>
      <Script src="assets/js/jquery-3.6.0.min.js"></Script>
      <Script src="assets/js/common_scripts_min.js"></Script>
      <Script src="assets/js/ensober_script.js"></Script>
      <Script src="assets/js/jquery.sliderPro.min.js"></Script>
      <Script src="assets/js/jquery.bpopup.min.js"></Script>
      <Script src="assets/js/main.js"></Script>
      <Script src="assets/js/popper.js"></Script>
      <Script src="assets/js/new_room_add.js"></Script>
    </>

  )
}

function add_card_ep(id){
  var jsdom = require('jsdom');
  $ = require('jquery')(new jsdom.JSDOM().window);
  $('#ep_price_'+id).css('display','block');
  $('#select-room-classic_'+id).css('display','none');
  $('#room_ep_detail_'+id).css('display','block');
  // $('.room_no1').text(1);
  //$('#epprice').val(2599);
  $('#epprice_text_'+id).text(id);
  $('#eppricenmrg_text_'+id).text($('#eppricenmrg_'+id).val());
  var htmlLoad = `<div class="row row_id" id="room_no_det_1">
                          <div class="col-sm-4"><span class="meal_type_des">Room <b>1</b></span> </div>
                          <div class="col-sm-4">
                              <label class="meal_type_des adults_label" style="width: 30%;">Adults</label>
                              <select class="form-control meal_type_des adults_kids" name="adults" id="adults_1" style="width: 70%;">
                                  <option value="1">1</option>
                                  <option value="2" selected>2</option>
                                  <option value="3">3</option>
                              </select>
                          </div>
                          <div class="col-sm-4">
                              <label class="meal_type_des adults_label" style="width: 30%;">Kids</label>
                              <select class="form-control meal_type_des adults_kids" name="kids" id="kids_1" style="width: 70%;">
                                  <option value="">Kids</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                              </select>
                          </div>
                      </div>`;
  var btnplus=`<span class="minus_count" onclick="minusCounter(${id});">
                      <i class="icon-minus-circled"></i>
                  </span>
                  <span class="no_counter" id="room_no1_${id}">
                      1
                  </span>
                  <input type="hidden" class="hide_input" name="classic_room_only" value="0">
                  <input type="hidden" class="hide_price" name="classic_room_only_price" value="0">
                  <input type="hidden" class="hide_adult" id="classic_room_only_hide_adult_id" name="classic_room_only_adult" value="0">
                  <input type="hidden" class="hide_kids" id="classic_room_only_hide_kids" name="classic_room_only_kids" value="0">
                  <span class="plus_count" onclick="plusCounter(${id});">
                      <i class="icon-plus-circled"></i>
                  </span>`;          

    $('#room_ep_detail_'+id).append(htmlLoad);
    $('#ep_price_'+id).html(btnplus);   
}

export default Home
