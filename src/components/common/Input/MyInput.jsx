import { Input } from '../../ui/input';

export default function MyInput({ type, placeholder }) {
    return (
        <Input type={type} placeholder={placeholder} className="rounded-3xl"></Input>
    )
}