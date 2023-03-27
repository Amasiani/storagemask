<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //list Roles
        return view('admin.roles.index', ['roles' => Role::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //create new role
        return view('admin.roles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //store new role
        $request->validate([
            'name' => 'required|string'
        ]);
        Role::create($request->except('__token'));

        return redirect('admin.roles.index')->with('success', 'Role created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        //edit Role
        return view('admin.roles.edit', ['role' => Role::find($role)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        //update
        $role = Role::find($role);
        $role->update($request->all());

        return redirect('admin.roles.index')->with('success', 'Role updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        //delete
        Role::destroy($role);

        return redirect('admin.roles.index')->with('success', 'Role deleted');
    }
}
