import minusSquare from './images/minusSquare.svg'
import bagTick from './images/bagTick.svg'
import calenderTick from './images/calendartTick.svg'
import clipboardTick from './images/clipboardTick.svg'
import element from './images/element.svg'
import emptyWallet from './images/emptyWallet.svg'
import Notification from './images/Notification.svg'
import setting from './images/setting.svg'
import sms from './images/sms.svg'
import help from "./images/help.svg"
function App() {
  let square = minusSquare;
  return (
    <>

      <div class="d-flex" id="wrapper">

        <div class="bg-white" id="sidebar-wrapper">
        <label>
            <input type='checkbox' id="checkbox"/>

            <div class="toggle">
              <span class="top_line common"></span>
              <span class="middle_line common"></span>
              <span class="bottom_line common"></span>
            </div>

         
            <div id="slide">
              <div class="sidebar-heading py-4 fs-4 fw-bold">Medico sales</div>
              <div class="list-group list-group-flush my-3">
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active text-primary"><span class="dash p-2"><img src={element} /></span>Dashboard</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={clipboardTick} /></span>Lab Test</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={calenderTick} /></span>Appointment</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={bagTick} /></span>Medicine Order</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={sms} /></span>Message</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={emptyWallet} /></span>Payment</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={setting} /></span>Settings</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text"><span class="dash p-2"><img src={help} /></span>help</a>
              </div>
            </div>
           </label>
        </div>






        <div id="page-content-wrapper">
          <div class="searchbar d-flex flex-wrap justify-content-around">
            <div>

              <input type="text" class="form-control" id="search" placeholder='search'></input>

            </div>
            <div class="icon">
              <span class="notify"><img src={Notification} /></span>
            </div>
          </div>


          <div class="header-text"><h5>Sales Information</h5></div>


          <form class="row g-5 p-4">
            <div class="col-auto">
              <label for="Customer" class="">Customer</label>
              <input type="text" class="form-control" id="Customer" placeholder="Enter Customer Name" />
            </div>
            <div class="col-auto">
              <label for="Invoice" class="">Invoice ID</label>
              <input type="text" class="form-control" id="Invoice" placeholder="Enter Invoice ID" />
            </div>
            <div class="col-auto">
              <label for="Start" class="">Start Date</label>
              <input type="text" class="form-control" id="Start" placeholder="Start Date" />
            </div>
            <div class="col-auto">
              <label for="End" class="">End Date</label>
              <input type="text" class="form-control" id="End" placeholder="End Date" />
            </div>
          </form>


          <div class="container-fluid row my-5">
            <div class="col datas">
              <table class="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col" id="invoice"><img src={square}></img></th>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Payable Amount</th>
                    <th scope="col">Paid Amount</th>
                    <th scope="col">Due</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>

                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>
                  <tr>
                    <th scope="row"><img src={square}></img></th>
                    <td id="invoice">#AHGA6B</td>
                    <td>23/09/2022</td>
                    <td>Jacob Marcus</td>
                    <td>$100</td>
                    <td>$000</td>
                    <td>$000</td>

                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>




    </>
  )
}

export default App
