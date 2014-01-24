## semai-api

semai.org API Server. It's running on [api.semai.org](http://api.semai.org)

## Install

```bash
$ npm install semai-api
```

Extract database:

```bash
$ tar -xvvf db.tar.gz
```

## Usage

Run semai-api commmand to start the server:

```bash
$ semai-api -p 8000
```

## API Reference

* **/search/:keyword:** Search poems & authors
* **/authors** List all authors
* **/author/:author:** "List all poems of given author
* **/author/:author:/:title:** Outputs specified poem
