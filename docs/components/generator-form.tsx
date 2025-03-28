'use client'

import { createStatic } from '@pix.js/qrcode'
import { isPixKey } from '@pix.js/validator'
import { useNumberFormat } from '@react-input/number-format'
import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const pixKeyValidator = (value: string) => {
  if (!value) {
    return 'Chave PIX é obrigatória'
  }

  if (!isPixKey(value)) {
    return 'Chave PIX inválida'
  }
}

type FormData = {
  key: string
  identifier: string
  name: string
  city: string
  amount: number
}

export function GeneratorForm() {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [payload, setPayload] = useState<string | null>(null)

  const inputRef = useNumberFormat({
    locales: 'pt-BR',
    format: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    const qrCode = createStatic({
      merchantAccountInfo: {
        key: data.key,
      },
      additionalData: {
        txId: data.identifier === '' ? undefined : data.identifier,
      },
      merchantName: data.name,
      merchantCity: data.city,
      value: data.amount === 0 ? undefined : data.amount,
    })

    setQrCode(await qrCode.toBase64())
    setPayload(qrCode.brcode)
  }

  const copyPayload = () => {
    navigator.clipboard.writeText(payload ?? '')
    toast.success('Pix copia e cola copiado para a área de transferência')
  }

  const { handleSubmit, Field, state } = useForm({
    defaultValues: {
      key: '',
      identifier: '',
      name: '',
      city: '',
      amount: 0,
    },
    onSubmit: (data) => {
      onSubmit(data.value)
    },
  })

  return (
    <div className="flex gap-4 justify-stretch items-center">
      <form
        className="flex flex-col gap-4 max-w-xl flex-1"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Field
          name="key"
          validators={{
            onChange: (value) => {
              return pixKeyValidator(value.value)
            },
          }}
          children={({ state, handleChange, handleBlur }) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor="key">Chave PIX</Label>
              <Input
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="minhachave@email.com"
              />
              {state.meta.errors.length > 0 && <p className="text-red-500 text-sm !my-0">{state.meta.errors[0]}</p>}
            </div>
          )}
        />

        <Field
          name="amount"
          children={({ state, handleChange, handleBlur }) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor="amount">Valor</Label>
              <Input
                defaultValue={state.value}
                onChange={(e) => handleChange(Number(e.target.value))}
                onBlur={handleBlur}
                placeholder="10000"
                ref={inputRef}
              />
              {state.meta.errors.length > 0 && <p className="text-red-500">{state.meta.errors[0]}</p>}
            </div>
          )}
        />

        <Field
          name="name"
          children={({ state, handleChange, handleBlur }) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome do recebedor</Label>
              <Input
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="João da Silva"
              />
            </div>
          )}
        />

        <Field
          name="city"
          children={({ state, handleChange, handleBlur }) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor="city">Cidade do recebedor</Label>
              <Input
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="São Paulo"
              />
            </div>
          )}
        />

        <Field
          name="identifier"
          children={({ state, handleChange, handleBlur }) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor="identifier">Identificador</Label>
              <Input
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="minhacompra-123"
              />
            </div>
          )}
        />

        <Button type="submit" className="cursor-pointer">
          Generate QR Code
        </Button>
      </form>

      {qrCode && payload && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex-1" asChild>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <img
                src={qrCode}
                alt="QR Code"
                className="w-full max-w-[400px] h-auto aspect-square dark:invert"
                onClick={copyPayload}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Clique para copiar o pix copia e cola</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
