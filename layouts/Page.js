import { DefaultLayout } from "./Default";
import { LeftSider } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";

export default function PageLayout({ children, meta }) {
    return (
        <DefaultLayout meta={meta}>
            <div className="px-4">
                <div className="row">
                    <div className="d-none d-lg-block col-2">
                        <LeftSider />
                    </div>
                    <div className="col-12 col-sm-12 col-md-9 col-lg-7 p-1">
                        {children}
                    </div>
                    <div className="d-none d-md-block col-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
