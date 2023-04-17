@extends('template')

@section('content')
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-header">
                Accounts
                <a href="{{ route('admin.accounts.create') }}" role="button" class="btn btn-primary btn-sm mb-2 float-end">Create/Edit Account</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">#</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            @foreach ($accounts as $account)
                            <tr>
                                <td scope="row">{{ $account->user->name }}</td>
                                <td>{{ $account->amount }}</td>
                                <td>#</td>
                                <td><a href="{{ route('admin.accounts.show', $account->id) }}" role="button" class="btn btn-info btn-sm">Detail</a></td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {{ $accounts->links()}}
    </div>
</div>
@endsection