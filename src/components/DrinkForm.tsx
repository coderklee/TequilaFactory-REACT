import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseColor, chooseRegion, chooseAlcohol, choosePrice } from "../redux/slices/RootSlice"

interface DrinkFormProps {
  id: string[];
  onClose: () => void;
}

const DrinkForm = ( props:DrinkFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseBrand(data.brand));
      dispatch(chooseColor(data.color));
      dispatch(chooseRegion(data.region));
      dispatch(chooseAlcohol(data.alcohol));
      dispatch(choosePrice(data.price));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Brand</label>
          <Input {...register('brand')} name='brand' placeholder="Brand" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div>
          <label htmlFor="region">Region</label>
          <Input {...register('region')} name='region' placeholder="Region" />
        </div>
        <div>
          <label htmlFor="alcohol">Alcohol by Volume (%)</label>
          <Input {...register('alcohol')} name='alcohol' placeholder="Alcohol by Volume (%)" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input {...register('price')} name='price' placeholder="Price" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default DrinkForm