import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";


{/* <Sidebar /> */}
{/* <Navbar /> */}
export default function Layout({ children }) {
    return (
        <main className="container-fluid">
            <div className="row g-0">
                <Sidebar />
            <div className="col-10">
                <div>
                    <Navbar />
                    <div className="d-flex flex-column align-items-center justify-content-center align-content-center">
                        {children}
                    </div>
                </div>
                
            </div>
            </div>
            <Footer />
           
        </main>
    )
  }
  