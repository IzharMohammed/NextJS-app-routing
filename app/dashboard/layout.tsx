
interface dashboardProps {
    children: React.ReactNode;
}

const dashboardLayout: React.FC<dashboardProps> = (props) => {
    return (
        <>
            <div>
                <nav className="border border-white p-8 flex justify-between">
                    <h1>izhar</h1>
                    <div className="flex gap-9">
                        <div>x</div>
                        <div>y</div>
                        <div>z</div>
                        <div>a</div>
                    </div>
                </nav>
                <div className="flex h-screen ">
                    <div className="flex flex-col border border-white  items-center gap-9 w-[15vw]">
                        <div>x</div>
                        <div>y</div>
                        <div>z</div>
                        <div>a</div>
                    </div>
                    <div className="border border-red-600">{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default dashboardLayout;