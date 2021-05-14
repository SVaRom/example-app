<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Usuario::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario=new Usuario;
        $usuario->id=$request->id;
        $usuario->nombre=$request->nombre;
        $usuario->correo=$request->correo;
        $usuario->direccion=$request->direccion;
        $usuario->contraseña=$request->contraseña;
        $usuario->save();
        $usuario = DB::table('usuarios')->where('id', $request->id)->get();
        return $usuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $query = DB::table('usuarios')
            ->select('contraseña')
            ->where('correo',$request->correo);
        $usuario=$query->get();
        return $usuario;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $usuario = DB::table('usuarios')
              ->where('correo', $request->correo)
              ->update(['contraseña' => $request->contraseñaNueva]);
        $usuario = DB::table('usuarios')->where('correo', $request->correo)->get();
        return $usuario;
    }

    public function showToken(){
        echo csrf_token();
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        DB::table('usuarios')->where('correo', '=', $request->correo)->delete();
    }
}
