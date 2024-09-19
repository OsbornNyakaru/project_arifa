const BgDarkGrid2 = () => {
return (
    <div className="relative h-full w-full bg-slate-950">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
);
};

export const BACKGROUND_OPTIONS = [
{
    name: 'Background Dark Grid 2',
    component: <BgDarkGrid2 />,
    theme: 'dark',
},
] as const;