import DashboardDatum from '../../components/dashboard/dashboard-datum.tsx';
import { randomInt } from '../../utils/common.ts';

export default function ProductDashboard() {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">
        <div className="col-lg-3">
          <DashboardDatum
            caption="Product Count"
            value={randomInt(1, 25).toString()}
          />
        </div>
        <div className="col-lg-3">
          <DashboardDatum
            caption="Products in Alpha"
            value={randomInt(1, 5).toString()}
          />
        </div>
        <div className="col-lg-3">
          <DashboardDatum
            caption="Products in Beta"
            value={randomInt(1, 10).toString()}
          />
        </div>
        <div className="col-lg-3">
          <DashboardDatum
            caption="Products in Release Candidate"
            value={randomInt(1, 10).toString()}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <DashboardDatum
            caption="Product Build/Version Count"
            value={randomInt(1, 500).toString()}
          />
        </div>
        <div className="col-lg-3">
          <DashboardDatum
            caption="Product Release Count"
            value={randomInt(1, 250).toString()}
          />
        </div>
        <div className="col-lg-3">
          <DashboardDatum
            caption="Product Customer Count"
            value={randomInt(1, 5000).toString()}
          />
        </div>
      </div>
    </div>
  );
}
