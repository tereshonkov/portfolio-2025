import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Accardion({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2 cursor-pointer">
            <span className="text-[20px] text-(--secondary) font-bold">
              {title}
            </span>
            <img
              src="/projects/down.png"
              alt="arrow down accordion"
              className={`w-4 h-4` + (open ? " transform rotate-180" : "")}
            />
          </DisclosureButton>
          <DisclosurePanel className={"flex items-center gap-2 p-3 mt-2"}>{children}</DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
