import { IMyTooltip } from '@/types/interfacesProps'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip'

export default function MyTooltip(props: IMyTooltip) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{props.element}</TooltipTrigger>
				<TooltipContent>
					<span>{props.tip}</span>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
