import Chart1 from "../Dashbar/components/Chart1";
import Cards from "./components/Cards";
import Chart2 from "./components/Chart2";

const Dashbar = () => {
  return (
    <div className="container">
      <Cards />
      <hr></hr>
      <h3 data-aos="zoom-out" data-aos-delay="400" className="text-center">
        Data in Charts
      </h3>
      <div className="d-flex container justify-content-lg-between justify-content-start flex-column flex-lg-row">
        <div className="container">
          <table className="table table-striped table-hover text-center justify-content-center my-20 container">
            <thead>
              <tr>
                <th scope="col">
                  <strong>No</strong>
                </th>
                <th scope="col">
                  <strong>Label</strong>
                </th>
                <th scope="col">
                  <strong>Header</strong>
                </th>
                <th scope="col">
                  <strong>column</strong>
                </th>
                <th scope="col">
                  <strong>Recorded Data</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-striped table-hover text-center justify-content-center my-20 container">
            <thead>
              <tr>
                <th scope="col">
                  <strong>No</strong>
                </th>
                <th scope="col">
                  <strong>Label</strong>
                </th>
                <th scope="col">
                  <strong>Header</strong>
                </th>
                <th scope="col">
                  <strong>column</strong>
                </th>
                <th scope="col">
                  <strong>Recorded Data</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Leanne Graham</td>
                <td>Sincere@april.biz</td>
                <td>Bret</td>
                <td>hildegrad.org</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <Chart1 />
          <Chart2 />
        </div>
      </div>
    </div>
  );
};

export default Dashbar;
