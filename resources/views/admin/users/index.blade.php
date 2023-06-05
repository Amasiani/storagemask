@extends('admintemp')
@section('title', 'List of users')
@section('content')
<section style="padding-top: 5px;">
    <div class="container">
        <div class="row"> 
            <div class="card">
                <div class="card-header">
                    <a href="{{ route('admin.assign') }}" class="btn btn-primary me-md-2 mb-2 float-end" role="button">Assign role</a>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($users as $user)
                                <tr>
                                    <td scope="row">{{ $user->name }}</td>
                                    <td>{{ $user->email }}</td>
                                    <!--<td><div class="btn btn-group">
                                            <button type="button" class="btn dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="true">
                                            list of churches    
                                            </button>
                                              
                                            <div class="dropdown-menu">                                           
                                                <ul>
                                                <a href="#" role="button" class="btn"><li>#</li></a> 
                                                </ul>
                                            </div>                                      
                                        
                                        </div>
                                    </td>-->
                                    <td>
                                        <a href="{{ route('admin.users.show', $user->id) }}"><button type="button" class="btn btn-info">Detail</button></a>
                                    </td>
                                </tr>
                                    @endforeach
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>
@endsection