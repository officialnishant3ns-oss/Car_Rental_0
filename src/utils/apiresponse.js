class apiresponse extends Error {
  constructor(message, statuscode) {
    super(message)

    this.statuscode = statuscode
    this.success = true;
    this.message = message
    this.data = null
  }         
}

export default apiresponse