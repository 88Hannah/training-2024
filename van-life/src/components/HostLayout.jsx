import { Link, Outlet } from 'react-router-dom';

export default function HostLayout() {
    return (
        <>
            <div>
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/review'>Review</Link>
            </div>
            <Outlet />
        </>
    )
}