@extends('admintemp')
@section('title', 'Referral')
@section('content')
<section style="padding-top: 5px;">
    <div class="container">
        <div class="row"> 
            <div class="card">
                <div class="card-header">
                    <a href="{{ url('/home') }}" class="btn btn-primary me-md-2 mb-2 float-end" role="button">Back</a>
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
                                @foreach($referrals as $referral)
                                <tr>
                                    <td scope="row">{{ App\models\User::where('id', $referral->user_id)->get()->value('name')}}</td>
                                    <td>{{ $referral->link }}</td>
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
                                </tr>
                                    @endforeach
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>
@endsection