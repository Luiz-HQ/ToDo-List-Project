import { Input } from '../../ui/input';

// eslint-disable-next-line react/prop-types
export default function MyInput({ type, placeholder, className }) {
    return (
        <Input type={type} placeholder={placeholder} className={className}></Input>
    )
}