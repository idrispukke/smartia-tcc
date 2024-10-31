'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from 'axios'
import PostGenerator from '@/components/post'

type FormData = {
     ideia: string;
     tipo: string;
     plataforma: string;
}

interface Ideia {
     title: string;
     ideia: string;
     legenda: string;
}

interface IdeiasData {
     hashtags: string[];
     ideias: Ideia[];
}

export default function Component() {
     const [ideias, setIdeias] = useState<IdeiasData | null>(null);
     const [message, setMessage] = useState<string | null>(null);
     const [error, setError] = useState<string | null>(null);
     const [isFetched, setIsFetched] = useState<boolean>(false); // Estado para verificar se a requisição foi completada

     const { control, handleSubmit, reset } = useForm<FormData>({
          defaultValues: {
               ideia: '',
               tipo: 'Formal',
               plataforma: 'Instagram'
          }
     });

     const onSubmit = async (data: { ideia: string; tipo: string; plataforma: string }) => {
          try {
               reset();
               const response = await axios.post('http://localhost:3000/api/test', {
                    ideia: data.ideia, tipo: data.tipo, plataforma: data.plataforma
               });
               setIdeias(response.data);
               setMessage('Postagem Gerada com sucesso ');
               setError(null);
               setIsFetched(true); // Marca como requisitado
          } catch (error) {
               console.log(error);
               setError('Erro ao enviar dados.'); // Defina uma mensagem de erro apropriada
               setIsFetched(false); // Requisição não foi bem-sucedida
          }
     }

     return (
          <div className="h-screen bg-gradient-to-br from-teal-500 to-blue-900 flex flex-col justify-center items-center gap-1 p-4">
               {/* Seção de Exibição de Posts */}
               <div className="w-full h-[80%]  flex justify-around border-none ">
                         {isFetched && ideias && (
                              <>
                                   {ideias.ideias.map((ideia, index) => (
                                        <PostGenerator
                                             key={index}
                                             title={ideia.title}
                                             idea={ideia.ideia}
                                             caption={ideia.legenda}
                                             hashtags={ideias.hashtags}
                                        />
                                   ))}
                              </>
                         )}

               </div>


               {/* Seção do Formulário */}
               <div className="p-6 h-[40%] w-[30%] bg-slate-900 rounded-sm shadow-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <label > Como vc deseja sua postagem?</label>
                         <Controller
                              name="ideia"
                              control={control}
                              render={({ field }) => (
                                   <Input
                                        {...field}
                                        placeholder="Escreva sua ideia"
                                        className="bg-gray-700 text-white border-gray-600"
                                   />
                              )}
                         />
                         <div className="grid grid-cols-2 gap-4">
                              <Controller
                                   name="tipo"
                                   control={control}
                                   render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                             <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                                                  <SelectValue placeholder="Select option" />
                                             </SelectTrigger>
                                             <SelectContent>
                                                  <SelectItem value="Formal">Formal</SelectItem>
                                                  <SelectItem value="Informal">Informal</SelectItem>
                                             </SelectContent>
                                        </Select>
                                   )}
                              />
                              <Controller
                                   name="plataforma"
                                   control={control}
                                   render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                             <SelectTrigger className="bg-gray-700 text-white border-gray-600">
                                                  <SelectValue placeholder="Select option" />
                                             </SelectTrigger>
                                             <SelectContent>
                                                  <SelectItem value="Instagram">Instagram</SelectItem>
                                                  <SelectItem value="Twitter">Twitter</SelectItem>
                                                  <SelectItem value="Facebook">Facebook</SelectItem>
                                             </SelectContent>
                                        </Select>
                                   )}
                              />
                         </div>
                         <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                              Enviar
                         </Button>
                         {error && <p className="text-red-500">{error}</p>} {/* Exibir mensagem de erro, se houver */}
                         {message && <p className="text-green-500">{message}</p>} {/* Exibir mensagem de sucesso, se houver */}
                    </form>
               </div>
          </div >
     )
}
