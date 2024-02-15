import { motion } from "framer-motion";
import ContactHero from "../../components/contact/ContactHero";
import Map from "../../components/contact/Map";
import Loading from "../../components/Loading";
import fadeInOut from "../../lib/animations/fadeInOut";
import { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanity';
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    message: '',
    // Add other form fields here
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to Sanity
    sanityClient
      .create({
        _type: 'contact',
        ...formData,
      })
      .then((response) => {
        console.log('Contact data sent:', response);
        // Clear the form
        setFormData({
          name: '',
          email: '',
          request: '',
          message: '',
          // Add other form fields here
        });
        fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error('Error sending contact data:', error);
      });
  };

  return (
   <>
    <motion.div
      variants={fadeInOut}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[80vh] z-0"
    >
      <div className="ctn mb-8">
        <div className='flex flex-row max-[1000px]:flex-col mt-8'>
          <div className='flex items-start -mt-12'>
            <ContactHero />
          </div>
          <div className="ctn flex items-center justify-center w-full">
            <form onSubmit={handleSubmit} className="min-[200px]:max-[1000px]:w-[100%]">
            <div className="flex flex-row justify-between">
                <label className='text-primary mx-4'htmlFor="name">Name</label>
                <input
                  className="textarea-rounded bg-[#b4e7bb] text-black w-full"
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                />
            </div> 
            <div className="flex flex-row justify-between my-4">
                <label className='text-primary mx-4'htmlFor="email">Email</label>
                <input
                  className="textarea-rounded bg-[#b4e7bb] text-black w-full"
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  />
              </div>
              <div className="flex flex-row justify-between my-4">
                <label className='text-primary mx-4'htmlFor="request">Select One</label>
                <select
                  className="textarea-rounded bg-[#b4e7bb] text-secondary w-full"
                  name="request"
                  value={formData.request || ''}
                  onChange={handleChange}
                  style={{ width: '400px' }}
                  >
                    <option value="">What can we help with?</option>
                    <option value="residential">Residential Estimate</option>
                    <option value="commercial">Commercial Estimate</option>
                    <option value="job-listing">Job Opportunity</option>
                    <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-row justify-between my-4">
                <label className='text-primary mx-4'htmlFor="message">Message</label>
                <textarea
                  className="textarea-rounded bg-[#b4e7bb] text-black w-full"
                  name="message"
                  rows="4"
                  value={formData.message || ''}
                  onChange={handleChange}
                />
              </div>
              <div className=" btn2 cursor-pointer flex justify-center p-4 my-4">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.7,
                  }}
                  type="submit"
                  className="w-full"
                  >
                  Submit
                </motion.button> 
              </div>  
          </form>
        </div>
       </div> 
      </div>
      
      <Loading />
      <div className="ctn">
        
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-16 mb-20">
            
          <div className="flex flex-col gap-8 my-20 md:my-0 md:text-left text-center">
            <div className="flex flex-col gap-3 mt-12">
              <h2 className="font-bold text-primary text-3xl">Phone & Email</h2>
              <p className="leading-relaxed">
                <a
                  href="mailto:newriverturfsolutions@gmail.com"
                  className="text-primary underline-offset-1 underline"
                >
                  newriverturfsolutions@gmail.com
                </a>
                <br />
                <div className="text-secondary">
                 +852 2890 4500
                </div>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-primary text-3xl">Our Office</h2>
              <p className="leading-relaxed text-secondary">
                103 Office Rd
                <br />
                Riner VA 24149
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-primary text-3xl">Office Hours</h2>
              <p className="leading-relaxed text-secondary">
                Monday - Friday
                <br />
                9:00 - 5:00
              </p>
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-4">
            <div className=" text-secondary text-center">
              Proudly Serving the Soutwest Virginia area!
            </div>
            <div className="col-span-3">
              <Map />
            </div>
          </div>
        </div>
      </div>
     <div className="pointer-events-none">
          <Image
            src="/grass-bg-1.png"
            alt=""
            className="opacity-30 -mt-16"
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }} 
          />
      </div> 
    </motion.div>
    
   </>  
 );
};

export default Contact;
