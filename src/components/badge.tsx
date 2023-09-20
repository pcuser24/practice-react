interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <div className={"flex items-center bg-slate-200 rounded-sm ml-2 py-0 px-1 text-xs font-medium" + className} {...props} />
  )
}
