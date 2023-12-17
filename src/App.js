import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import illustration from './images/id.png'
import idcard from './images/id-card.png'
import creditcard from './images/credit.png'
import terminal from './images/terminal.png'

function App() {
  return (
    <>
    <section className="purple">
   <div className="container pt-3">
   <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid align-items-center">
    <a className="navbar-brand text-white" href="#"> <h4 class="fw-bold">IdentityBloc</h4></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li style={{paddingLeft:'40px'}} class="nav-item">
          <a class="nav-link text-white" href="#features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-5" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#pricing">Pricing</a>
        </li>
      </ul>
      <form class="d-flex">
        
        <button class="btn px-3" style={{border:'1px solid white',color:'white'}}>Sign in</button>
        <button class="btn px-3 btn-warning text-white" style={{marginLeft:'20px'}}>Sign Up</button>
      </form>
    </div>
  </div>
</nav>
   </div>
      <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 d-flex align-items-center">
         <div>
         <h1 style={{fontSize:"3em"}} className="text-white fw-bold">Welcome to IdentifyBloc<br/>
          <br/>
  
          </h1>
          <p className="text-white">IdentifyBloc aims to create a secure,<br/>
          decentralized, and universally recognized identification system
        using ICP blockchain technology. Our platform empowers individuals with control over their identities,
        fostering inclusion and enabling access to essential services.
          </p>
          <a href="your_document_path_or_external_link" target="_blank" class="btn text-white btn-warning px-3">View documentation</a>

         </div>
        </div>
        <div className="col-md-6 p-2 ">
          <img src={illustration} width="100%" height="auto"/>

        </div>
      </div>
      </div>
    </section>
    <section id='features'>
    <div className="container p-5">
    <h2 className="text-center fw-bold">IdentifyBloc is built for</h2>
    <div className="row mt-5">
      <div className="col-md-4 p-5">
        <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={idcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Instant Id Verification</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Secure storage and management of identity credentials.</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
      <div className="col-md-4 p-5">
      <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={creditcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Fraud Detection</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Empowering individuals with control over their identities</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
      <div className="col-md-4 p-5">
      <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={idcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Instant Id Verification</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Efficient verification processes for businesses and government entities</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
    </div>
     </div>
     </section>
     <div style={{backgroundColor:"#DEE1E9"}} className="container-fluid mp-2 mt-3">
       <div className="row">
         <div className="col-md-5 mp-2">
           <h1 className="fw-bold">ICP Blockchain: The Backbone of Trust</h1>
            <p className="mt-3 text-secondary">
            At the heart of IdentifyBloc lies the ICP blockchain, a decentralized and tamper-proof ledger that ensures the integrity and security of identity data. Unlike traditional systems, ICP blockchain offers unparalleled transparency, creating a foundation of trust for individuals, businesses, and governments alike.
            </p>
            <a href="https://internetcomputer.org/docs/current/home" target="_blank" style={{border: "1px solid black", borderRadius: "10px", padding: "0.7em 1em"}} class="btn mt-3 text-decoration-none">View Documentation</a>

         </div>
         <div className="col-md-7 mp-2">
           <img src={terminal} width="100%" height="100%" />
         </div>
       </div>
     </div>
     <section id='pricing' className="pricing py-5">
        <div className="container">
        <h2 className="text-center fw-bold">Pricing Plans</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm">
                <div className="card-header bg-transparent border-0">
                 <h5 className="my-0 font-weight-normal">Basic</h5>
                </div>
                <div className="card-body">
                 <h1 className="card-title pricing-card-title">$10 <small className="text-muted">/ mo</small></h1>
                 <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                 </ul>
                 <button type="button" className="btn btn-lg btn-block btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm">
                <div className="card-header bg-transparent border-0">
                 <h5 className="my-0 font-weight-normal">Pro</h5>
                </div>
                <div className="card-body">
                 <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                 <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                 </ul>
                 <button type="button" className="btn btn-lg btn-block btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm">
                <div className="card-header bg-transparent border-0">
                 <h5 className="my-0 font-weight-normal">Enterprise</h5>
                </div>
                <div className="card-body">
                 <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                 <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                 </ul>
                 <button type="button" className="btn btn-lg btn-block btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
  <section id='contact' className="contact">
 <div className="container">
    <h2>Contact Us</h2>
    <form>
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label for="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
 </div>
</section>
  </>
  );
}

export default App;
