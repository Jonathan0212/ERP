import { useState } from "react"

const columns = [
    "type", "bottles", "cans", "kegs", "cost"
]
const data = {
    store1: [
        { type: "IPA", bottles: 78, cans: 210, kegs: 23, cost: "$2,000"},
        { type: "SOUR", bottles: 72, cans: 220, kegs: 40, cost:"$5,200"},
        { type: "LAGER", bottles: 107, cans: 100, kegs: 70, cost:"$4,375"},
        { type: "STOUT", bottles: 85, cans: 90, kegs: 53, cost: "$2,356"}

    ],
    store2: [
        { type: "IPA", bottles: 43, cans: 82, kegs: 15, cost:"$1,798"},
        { type: "SOUR", bottles: 92, cans: 50, kegs: 60, cost:"$2,200"},
        { type: "LAGER", bottles: 17, cans: 10, kegs: 8, cost:"$1,589"},
        { type: "STOUT", bottles: 60, cans: 30, kegs: 78, cost:"$3,212" },
    ]
}

function Data({ setComponent }) {
    const [store, setStore] = useState("store1")
    const handleClick = (name) => { setStore(name) }
    const products = data[store]
    return (
        <div class="container">
            <div class="row justify-content-around my-5">
                <div class="col">
                    <button onClick={() => handleClick("store1")} type="button" class="btn btn-warning">Store 1</button>
                </div>
                <div class="col">
                    <button onClick={() => handleClick("store2")} type="button" class="btn btn-success">Store 2</button>
                </div>

            </div>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Bottles</th>
                    <th>Cans</th>
                    <th>Kegs</th>
                    <th>Cost</th>
                </tr>
                {products.map((product) => {
                    return (
                        <tr>
                            {columns.map((column) => {
                                return (
                                    <td>
                                        {product[column]}
                                    </td>
                                )

                            })}


                        </tr>
                    )

                })}
                {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> */}
            </table>
        </div>
    )
}

export default Data;