import DashboardDatum from '../../../components/dashboard/dashboard-datum.tsx';

export default function ProductItemDashboard() {
  return (
    <div>
      <h1>Product X Dashboard</h1>
      <div className="row">
        <div className="col-lg-2">
          <DashboardDatum
            caption="Inception Date"
            value="2024-01-21"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Latest Release"
            value="3.42.12"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Latest Build/Version"
            value="4.0.21"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Count of Releases"
            value="7"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Count of Builds/Versions"
            value="23"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Count of Issues"
            value="234"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Oldest Issue Fid"
            value="1"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Newest Issue Fid"
            value="1436"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Customer Count"
            value="93"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Location Count"
            value="103"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Oldest Customer"
            value="Jason Alan Smith"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Newest Customer"
            value="Bob Allan"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Oldest Location"
            value="33"
          />
        </div>
        <div className="col-lg-2">
          <DashboardDatum
            caption="Newest Location"
            value="1432"
          />
        </div>
      </div>
    </div>
  );
}
