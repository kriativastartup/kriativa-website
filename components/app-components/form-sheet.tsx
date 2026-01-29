"use client";

import { Form } from "@/components/ui/form";
import {
    Sheet,
    SheetDescription,
    SheetHeader,
    SheetPanel,
    SheetPopup,
    SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon, Paperclip, XIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

interface FormSheetProps {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const stepsItems = [
    {
        title: "Preencha o formulário",
    },
    {
        title: "Envie sua Proposta",
    },
    {
        title: "Receba seu Orçamento",
    },
]

const typeService = [
    {
        title: "Websites",
        label: "websites",
    },
    {
        title: "Aplicativos Móveis",
        label: "mobile_apps",
    },
    {
        title: "Aplicativos Desktop",
        label: "desktop_apps",
    }
]

export default function FormSheet({ open, onOpenChange }: FormSheetProps) {

    const [selectedService, setSelectedService] = React.useState<"websites" | "mobile_apps" | "desktop_apps">("websites");
    const [date, setDate] = React.useState<Date>()

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetPopup
                showCloseButton={false}
                side="bottom" className={'h-[95vh] p-0! bg-white border-none!'}>
                <Form className="contents p-0!">
                    <SheetHeader className="hidden">
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetPanel className="grid grid-cols-[40%_60%] h-full py-4! ps-4! pe-0!">
                        <header
                            style={{
                                backgroundImage: "url('/images/form_back.jpg')"
                            }}
                            className="h-full p-12 flex flex-col justify-between rounded-4xl bg-cover bg-center">
                            <header className="flex items-center justify-between">
                                <svg className="size-16" viewBox="0 0 133 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M99.6081 0L81.5688 38.4314L113.726 40L132.549 0H99.6081Z" fill="white" />
                                    <path d="M83.9215 40H51.7646L69.8039 80H102.745L83.9215 40Z" fill="white" />
                                    <path d="M37.6471 0L0 80H32.9412L69.8039 0H37.6471Z" fill="white" />
                                </svg>
                            </header>
                            <div>
                                <h6 className="text-white text-4xl font-bold!">
                                    Deixe-nos revolucionar
                                    sua presença digital!
                                </h6>
                                <div className="mt-10 grid grid-cols-3 gap-3">
                                    {
                                        stepsItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="h-36 backdrop-blur-3xl p-5 bg-white/10 flex flex-col justify-between rounded-4xl">
                                                <div className="size-6 flex items-center justify-center rounded bg-white">
                                                    <h6 className="font-semibold">
                                                        {index + 1}
                                                    </h6>
                                                </div>
                                                <div>
                                                    <p className="text-white">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </header>
                        <ScrollArea className="flex items-center justify-center">
                            <div className="max-w-xl w-full pt-14 pb-14">
                                <header>
                                    <div className="flex items-center justify-between">
                                        <svg className="size-12" viewBox="0 0 133 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M99.6081 0L81.5688 38.4314L113.726 40L132.549 0H99.6081Z" fill="#5e61fa" />
                                            <path d="M83.9215 40H51.7646L69.8039 80H102.745L83.9215 40Z" fill="#5e61fa" />
                                            <path d="M37.6471 0L0 80H32.9412L69.8039 0H37.6471Z" fill="#5e61fa" />
                                        </svg>
                                        <Button variant={'secondary'} className="text-black size-10! rounded-full" size="icon" onClick={() => onOpenChange(false)}>
                                            <XIcon className="size-5" />
                                        </Button>
                                    </div>

                                    <h5 className="pt-7 text-4xl font-bold">
                                        Soliciar Orçamento
                                    </h5>
                                    <p className="pt-2 text-[16px] text-gray-600">
                                        Preencha o formulário abaixo para receber um orçamento personalizado para o seu projeto. Nossa equipe entrará em contato com você em breve!
                                    </p>

                                    <div className="grid gap-3 grid-cols-3 rounded-md bg-gray-100 p-1 mt-12 ">
                                        {
                                            typeService.map((item) => (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={() => setSelectedService(item.label as "websites" | "mobile_apps" | "desktop_apps")}
                                                    className={`cursor-pointer text-[15px] px-4 py-2.5 transition-all rounded-md hover:opacity-65 ${selectedService === item.label ? 'bg-white border text-pallete-1 border-pallete-1/30 font-semibold' : ''}`}>
                                                    {item.title}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </header>
                                <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={'name'} className="font-semibold">
                                            Nome Completo
                                        </Label>
                                        <Input
                                            className={'py-1.5! shadow-none!'}
                                            id="name" type="text" placeholder="Quem está solicitando?" />
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={'email'} className="font-semibold">
                                            Email
                                        </Label>
                                        <Input
                                            className={'py-1.5! shadow-none!'}
                                            id="email" type="text" placeholder="exemplo@dominio.com" />
                                    </div>
                                    <div className="flex col-span-2 flex-col items-start gap-4">
                                        <Label htmlFor={'company'} className="font-semibold">
                                            Empresa (Opcional)
                                        </Label>
                                        <Input
                                            className={'py-1.5! shadow-none!'}
                                            id="company" type="text" placeholder="Nome da empresa" />
                                    </div>
                                    <div className="flex flex-col items-start col-span-2 gap-4">
                                        <Label htmlFor={'project-description'} className="font-semibold">
                                            Funcionalidades do Projeto
                                        </Label>
                                        <Textarea
                                            maxLength={500}
                                            id={'project-description'} className="pt-2! shadow-none!" placeholder="Descrição detalhada do projecto..." />
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={
                                            "limit-budget"
                                        }
                                            className="font-semibold"
                                        >
                                            Prazo de Entrega
                                        </Label>
                                        <Popover>
                                            <PopoverTrigger className={'w-full'}>
                                                <Button
                                                    variant="outline"
                                                    data-empty={!date}
                                                    className="data-[empty=true]:text-muted-foreground py-5 shadow-none! w-full justify-between text-left font-normal"
                                                >
                                                    {date ? format(date, "PPP") : <span>
                                                        Selecione uma data
                                                    </span>}
                                                    <ChevronDownIcon />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    defaultMonth={date}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={
                                            "archive-briefing"
                                        }
                                            className="font-semibold"
                                        >
                                            Arquivar Briefing
                                        </Label>
                                        <Button variant="outline" className="w-full py-5 shadow-none!">
                                            <Paperclip className="mr-2" />
                                            Escolher Arquivo
                                        </Button>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={
                                            "first-reference"
                                        }
                                            className="font-semibold"
                                        >
                                            Primeira Referência
                                        </Label>
                                        <InputGroup className="py-1.5! shadow-none!">
                                            <InputGroupAddon>
                                                <InputGroupText>https://</InputGroupText>
                                            </InputGroupAddon>
                                            <InputGroupInput id="first-reference" placeholder="website.com" className="pl-0.5!" />
                                        </InputGroup>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                        <Label htmlFor={
                                            "first-reference"
                                        }
                                            className="font-semibold"
                                        >
                                            Segunda Referência (opcional)
                                        </Label>
                                        <InputGroup className="py-1.5! shadow-none!">
                                            <InputGroupAddon>
                                                <InputGroupText>https://</InputGroupText>
                                            </InputGroupAddon>
                                            <InputGroupInput id="first-reference" placeholder="website.com" className="pl-0.5!" />
                                        </InputGroup>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-end">
                                        <Button className="px-8 font-semibold hover:bg-pallete-1/80! transition-all! bg-pallete-1 rounded-full  py-6 shadow-none! border-none!" type="submit">
                                            Enviar Proposta
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </SheetPanel>

                </Form>
            </SheetPopup>
        </Sheet>
    );
}
