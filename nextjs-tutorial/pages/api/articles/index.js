import { stuff } from "../../../qnko"


const index = (req, res) => {
    res.status(200).json(stuff)
}

export default index

// export default function handler(req, res) {
//     res.status(200).json(stuff)
// }
