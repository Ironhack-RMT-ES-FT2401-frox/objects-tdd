function centsToDecimals(cents) {

  if (typeof cents === "string") {
    return undefined
  }

  if (cents === undefined) {
    return 0
  }


  let euros = cents / 100
  return euros


}