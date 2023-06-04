{
    "targets": [{
        "target_name": "Decode",
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "sources": [
            "cppsrc/decode.cpp"
        ],
        "include_dirs": [
            "<!@(node -p \"require('node-addon-api').include\")",
            "/usr/include/gstreamer-1.0",
            "/usr/include/glib-2.0",
            "/usr/lib/x86_64-linux-gnu/glib-2.0/include"
        ],
        "libraries": [
            "-lgstreamer-1.0",
            "-lgobject-2.0",
            "-lglib-2.0"
        ],
        "dependencies": [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        "defines": [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
    }]
}
