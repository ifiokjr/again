var searchIndex={};
searchIndex["again"] = {"doc":"`Again` is a wasm-compatible utility for retrying standard…","i":[[3,"RetryPolicy","again","A template for configuring retry behavior",null,null],[5,"retry","","Retries a fallible `Future` with a default `RetryPolicy`",null,[[["t"]]]],[5,"retry_if","","Retries a fallible `Future` under a certain provided…",null,[[["c"],["t"]]]],[8,"Condition","","A type to determine if a failed Future should be retried",null,null],[10,"is_retryable","","Return true if an Futures error is worth retrying",0,[[["self"],["e"]],["bool"]]],[8,"Task","","A unit of work to be retried",null,null],[16,"Item","","The `Ok` variant of a `Futures` associated Output type",1,null],[16,"Error","","The `Err` variant of `Futures` associated Output type",1,null],[16,"Fut","","The resulting `Future` type",1,null],[10,"call","","Call the operation which invokes results in a `Future`",1,[[["self"]]]],[11,"exponential","","Configures policy with an exponential backoff delay.",2,[[["duration"]],["self"]]],[11,"fixed","","Configures policy with a fixed backoff delay.",2,[[["duration"]],["self"]]],[11,"with_jitter","","Configures randomness to the delay between retries.",2,[[["bool"]],["self"]]],[11,"with_max_delay","","Limits the maximum length of delay between retries",2,[[["duration"]],["self"]]],[11,"with_max_retries","","Limits the maximum number of attempts a Future will be tried",2,[[["usize"]],["self"]]],[11,"retry","","Retries a fallible `Future` with this policy's configuration",2,[[["self"],["t"]]]],[11,"retry_if","","Retries a fallible `Future` with this policy's…",2,[[["c"],["self"],["t"]]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"vzip","","",2,[[],["v"]]],[11,"clone","","",2,[[["self"]],["retrypolicy"]]],[11,"default","","",2,[[],["self"]]]],"p":[[8,"Condition"],[8,"Task"],[3,"RetryPolicy"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);