class apirerror extends Error {
    constructor(statuscode, message, error = [],stack = "",)
    {
        super(message)

        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false
        this.error = error
    }
}
export default apirerror