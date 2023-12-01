import React from "react";

function Contact(){
    return(
        <div>
            <section id="contact-section">
			  <div className="contact-container">
				<div className="contact-cont">
				  <h1>CONTACT</h1>
				  <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
				</div>
				
				<div className="contact-row">
					<div className="contact-col">
					<i className="fa fa-map-marker icon1" aria-hidden="true"></i>
					<h3>Our Address</h3>
					<p>A108 Adam Street,New York,NY 535022</p>
					</div>
					
					
					
					<div className="contact-col">
					<i className="fa fa-envelope-o icon1" aria-hidden="true"></i>
					<h3>Email Us</h3>
					<p>contact@example</p>
					</div>
					
					
					<div className="contact-col">
					<i className="fa fa-phone icon1" aria-hidden="true"></i>
					<h3>Call Us</h3>
					<p>+1 5589 55488 55</p>
					</div>
					
					
				</div>
				
				
				<div className="contact-left">
					<div className="contact-row2">
						<div className="contact-col2">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.443169848835!2d-74.02459169338331!3d40.71007339638645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1688872257798!5m2!1sen!2sin" style={{height:"380px",width:"480px",style:'border:0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						
						</div>
						
						<div className="contact-col2">
						
						<form>
						<div className="form-row">
						<div className="form-col">
						  <div className="input-box1">
						  
							<input type ="text" placeholder="Your Name"/>
						  </div>
						  </div>
						  <div className="form-col">
						    <div className="input-box1">
							<input type ="text" placeholder="Your email"/>
						   </div>
						   </div>
						 </div>
						  <div className="input-box">
							<input type="text" placeholder="Subject"/>
						  </div>
							
						  <div className="input-box message-box">
							<textarea cols="10" rows="10" placeholder="Message">  </textarea>
						  </div>
						  <div className="button3">
							<a href="#">Send Massage</a>
						  </div>
						</form>
						</div>
					
					</div>
				
				</div>
			
			
			  </div>
			</section>
		
        </div>
    )
}
export default Contact