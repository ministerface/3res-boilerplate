import React, { Component } from 'react';
import FeedList from '../ui/FeedList';
import AddFeed from '../ui/AddFeed';


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

          <AddFeed action={this.props.feedActions}/>
          <FeedList action={this.props.feedActions} feeds={this.props.feeds}/>


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
          <div className="box">
            <div className="box-header">
              <h3>Последние задачи</h3>
            </div>
            <div className="box-tool">
              <ul className="nav">
                <li className="nav-item inline dropdown">
                  <a className="nav-link text-muted p-x-xs" data-toggle="dropdown">
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-scale pull-right">
                    <a className="dropdown-item" href="">New task</a>
                    <a className="dropdown-item" href="">Make all finished</a>
                    <a className="dropdown-item" href="">Make all unfinished</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item">Settings</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-body">
              <div className="streamline b-l m-l">
                <div className="sl-item b-success">
                  <div className="sl-icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="sl-content">
                    <div className="sl-date text-muted">8:30</div>
                    <div>Call to customer <a href="" className="text-info">Jacob</a> and discuss the detail.</div>
                  </div>
                </div>
                <div className="sl-item b-info">
                  <div className="sl-content">
                    <div className="sl-date text-muted">Sat, 5 Mar</div>
                    <div>Prepare for presentation</div>
                  </div>
                </div>
                <div className="sl-item b-warning">
                  <div className="sl-content">
                    <div className="sl-date text-muted">Sun, 11 Feb</div>
                    <div>
                      <a href="" className="text-info">Jessi</a> assign you a task <a href="" className="text-info">Mockup Design</a>.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <a href="" className="btn btn-sm btn-block info text-u-c">Все задачи</a>
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
          <div className="box">
            <div className="box-header">
              <span className="label success pull-right">5</span>
              <h3>Активность</h3>
            </div>
            <div className="box-body">
              <div className="streamline b-l m-b m-l">
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a2.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <a href="" className="text-info">Louis Elliott</a>
                    <span className="m-l-sm sl-date">5 min ago</span>
                    <div>assign you a task <a href="" className="text-info">Mockup Design</a>.</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a5.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <a href="" className="text-info">Terry Moore</a>
                    <span className="m-l-sm sl-date">10 min ago</span>
                    <div>Follow up to close deal</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img src="images/a8.jpg" className="img-circle"/>
                  </div>
                  <div className="sl-content">
                    <a href="" className="text-info">Walter Paler</a>
                    <span className="m-l-sm sl-date">1 hour ago</span>
                    <div>was added to Repo</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="box-footer">

              <a className="btn btn-sm btn-block success text-u-c">Показать больше</a>
            </div>
          </div>

        </div>
      </div>

    );
  }
}
