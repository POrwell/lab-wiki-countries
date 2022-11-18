import { Link } from "react-router-dom";

function CountriesList({country}) {
let lowerCaseCode = country.alpha2Code.toLowerCase()
    return(
<Link className="Link" to="/countrydetails/:alpha3Code">
<img src={`https://flagpedia.net/data/flags/icon/72x54/${lowerCaseCode}.png`}/>
<p>{country.name.common}</p>
</Link>

    )
}

export default CountriesList;