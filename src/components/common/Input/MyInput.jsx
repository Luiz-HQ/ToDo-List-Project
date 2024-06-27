import { Input } from '../../ui/input';

// eslint-disable-next-line react/prop-types
export default function MyInput({ type, placeholder, className, onChange, onKeyPress, value }) {
    return (
        <Input 
            type={type} 
            placeholder={placeholder} 
            className={className} 
            onChange={onChange} 
            onKeyPress={onKeyPress}
            value={value}
        />
    )
}