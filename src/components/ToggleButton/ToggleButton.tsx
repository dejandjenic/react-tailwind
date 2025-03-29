import { Minus, Plus } from "lucide-react";

export default function ({ open, setOpen }: { open: boolean, setOpen: Function }) {
    return (<button onClick={() => setOpen(!open)} data-testid="toggle">
        {open ? (
            <Minus className="w-6 h-6 text-black-400" data-testid="minus" />
        ) : (
            <Plus className="w-6 h-6 text-black-400" data-testid="plus" />
        )}
    </button>
    )
}