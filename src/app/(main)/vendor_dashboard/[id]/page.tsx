import ExpandedVendorTile from "../../page-components/ExpandedPage";
import SideNav from "../../page-components/Side-Nav";

const ExpandedPage = () => {
  return (
    <div className="flex justify-around">
      <SideNav />
      <ExpandedVendorTile />
    </div>
  );
};

export default ExpandedPage;
