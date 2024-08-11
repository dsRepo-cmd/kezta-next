function GoogleMap() {
  return (
    <iframe
      title="Google maps"
      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29613.85462041243!2d-74.01574220633657!3d40.714528503669186!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1716743785587!5m2!1sen!2sua"
      width="930"
      height="500"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" w-full  "
    ></iframe>
  );
}

export default GoogleMap;
