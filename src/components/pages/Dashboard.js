import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-push-3 col-md-6">
          <div className="box">
            <div className="box-header b-b">
              <h3>Что нового?</h3>
            </div>
            <div className="box-body">
              <div className="row row-sm">
                <div className="col-xs-4">
                  <a >
                    <img src="images/c6.jpg" className="w-full"></img>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a >
                    <img src="images/c4.jpg" className="w-full"></img>
                  </a>
                </div>
                <div className="col-xs-4">
                  <a >
                    <img src="images/c5.jpg" className="w-full"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <form>
              <textarea className="form-control no-border" rows="3" placeholder="Напишите что нибудь..."></textarea>
            </form>
            <div className="box-footer clearfix">
              <button className="btn btn-info pull-right btn-sm">Отправить</button>
              <ul className="nav nav-pills nav-sm">
                <li className="nav-item"><a className="nav-link"><i className="fa fa-camera text-muted"></i></a></li>
                <li className="nav-item"><a className="nav-link"><i className="fa fa-video-camera text-muted"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="box-header">
              <h3>Лента <span className="label success">5</span></h3>
            </div>
            <div className="box-body">
              <div className="streamline b-l m-l-md">
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a0.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <div className="sl-date text-muted">2 минуты назад</div>
                    <div className="sl-author">
                      <a>Peter Joo</a>
                    </div>
                    <div>
                      <p>Consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus
                      at ultricies neque, quis malesuada augue. Donec eleifend</p>
                    </div>
                    <div className="sl-footer">
                      <a data-toggle="collapse" data-target="#reply-1">
                        <i className="fa fa-fw fa-mail-reply text-muted"></i> Reply
                      </a>
                    </div>
                    <div className="box collapse m-a-0 b-a" id="reply-1">
                      <form>
                        <textarea className="form-control no-border" rows="3" placeholder="Type something..."></textarea>
                      </form>
                      <div className="box-footer clearfix">
                        <button className="btn btn-info pull-right btn-sm">Post</button>
                        <ul className="nav nav-pills nav-sm">
                          <li className="nav-item"><a className="nav-link"><i className="fa fa-camera text-muted"></i></a></li>
                          <li className="nav-item"><a className="nav-link"><i className="fa fa-video-camera text-muted"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a2.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <div className="sl-date text-muted">8:30</div>
                    <div className="sl-author">
                      <a >Moke</a>
                    </div>
                    <div>
                      <p>Just followed <a className="text-info">Jacob</a> and she followed you too.</p>
                      <p>
                        <span className="inline p-a-xs b-a dark-white">
                          <img src="images/b2.jpg" className="img-responsive"/>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a3.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <div className="sl-date text-muted">Sat, 5 Mar</div>
                    <div className="sl-author">
                      <a >Moke</a>
                    </div>
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante soe aiea ose dos soois.</p>
                      <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                    </blockquote>


                    <div className="sl-item">
                      <div className="sl-left">
                        <img src="images/a2.jpg" className="img-circle"/>
                      </div>
                      <div className="sl-content">
                        <div className="sl-date text-muted">Sun, 11 Feb</div>
                        <p><a  className="text-info">Jessi</a> assign you a task <a  className="text-info">Mockup Design</a>.</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <img src="images/a5.jpg" className="img-circle"/>
                      </div>
                      <div className="sl-content">
                        <div className="sl-date text-muted">Thu, 17 Jan</div>
                        <p>Follow up to close deal</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-pull-6 col-md-3">
          <div className="box">
            <div className="box-tool">
              <ul className="nav">
                <li className="nav-item inline dropdown">
                  <a className="nav-link text-muted" data-toggle="dropdown">
                    <i className="material-icons md-18">&#xe164;</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-scale pull-right dark">
                    <a className="dropdown-item" >Activities</a>
                    <a className="dropdown-item" >Feed</a>
                    <a className="dropdown-item" >Photo</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Follow</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-a-md text-center">
              <p><img src="images/a1.jpg" className="img-circle w-xs"/></p>
              <a  className="text-md block">Семченко Вячеслав</a>
              <p><small>Разработчик</small></p>
              <div className="text-center m-t">
                <a  className="btn btn-sm primary w-sm m-y-xs">Написать</a>
              </div>
            </div>
            <div className="row no-gutter b-t b-b">
              <div className="col-xs-6 b-r">
                <a className="p-a block text-center">
                  <span className="block _600">3219</span>
                  <span>Задачи</span>
                </a>
              </div>
              <div className="col-xs-6">
                <a className="p-a block text-center">
                  <span className="block _600">1458</span>
                  <span>Решено</span>
                </a>
              </div>
            </div>

          </div>
          <div className="box light lt">
            <div className="box-body">
              <a  className="pull-left m-r">
                <img src="images/a0.jpg" className="img-circle w-40"/>
              </a>
              <div className="clear p-a-xs">
                <a >@Mike Mcalidek</a>
                <small className="block text-muted">2,415 followers / 225 tweets</small>
                <a  className="btn btn-sm btn-rounded white m-t-xs"><i className="fa fa-twitter m-t-xs"></i> Follow</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="box">
            <div className="box-header">
              <h4>Пользователи</h4>
            </div>
            <div className="list-group no-radius no-borders">
              <a className="list-group-item text-ellipsis">
                <span className="w-8 rounded m-r-sm success"></span>
                <img src="images/a2.jpg" className="w-24 m-r-sm img-circle"/>
                <span>Антон</span>
              </a>
              <a className="list-group-item text-ellipsis">
                <span className="w-8 rounded m-r-sm success"></span>
                <img src="images/a3.jpg" className="w-24 m-r-sm img-circle"/>
                <span>Денис</span>
              </a>
              <a className="list-group-item text-ellipsis">
                <span className="w-8 rounded m-r-sm dker"></span>
                <img src="images/a4.jpg" className="w-24 m-r-sm img-circle"/>
                <span>Александра</span>
              </a>
              <a className="list-group-item text-ellipsis">
                <span className="w-8 rounded m-r-sm dker"></span>
                <img src="images/a5.jpg" className="w-24 m-r-sm img-circle"/>
                <span>Вадим</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
    );
  }
}