import moment from 'moment'

// export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname

export const disabledDateBeforeToday = (current) => {
    return current < moment().subtract(1, 'days')
}

export const displayOccupancy = (adultNumber, childNumber) => {
    let adult = adultNumber > 1 ? `${adultNumber} Adults` : `${adultNumber} Adult`
    let child = childNumber > 1 ? `${childNumber} Children` : `${childNumber} Child`
    return (adult + ', ' + child)
}

export const displayNight = numberOfNight => {
    return numberOfNight > 1 ? `${numberOfNight} Nights` : `${numberOfNight} Night`
}