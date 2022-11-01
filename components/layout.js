import Navbar from "./navbar";
import Sidebar from "./sidebar";


{/* <Sidebar /> */}
{/* <Navbar /> */}
export default function Layout({ children }) {
    return (
        <main className="container-fluid">
            <div className="row">
            
            <div className="col-10 d-flex flex-column">
                
                <div className="main-container">
                    {children}
                </div>
            </div>
            </div>
            
           
        </main>
    )
  }
  