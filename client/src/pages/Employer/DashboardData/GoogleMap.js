import React from 'react';

const GoogleMap = () => {
    return(
        <div className=''>
            <iframe className='w-full h-96 mb-5 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483056.8182646369!2d73.56226626073753!3d18.93664680449188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714740642665!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )

//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const googleMapScript = document.createElement('script');
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
//     window.document.body.appendChild(googleMapScript);

//     googleMapScript.addEventListener('load', () => {
//       const map = new window.google.maps.Map(mapContainerRef.current, {
//         center: { lat: 0, lng: 0 },
//         zoom: 8,
//       });

//       // Customize the map according to your needs
//     });

//     return () => {
//       googleMapScript.removeEventListener('load');
//     };
//   }, []);

//   return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }}></div>;
};


export default GoogleMap