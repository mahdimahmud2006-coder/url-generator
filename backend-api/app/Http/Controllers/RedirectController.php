<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;

class RedirectController extends Controller
{
    /**
     * Redirect to the original URL based on the short code.
     *
     * @param  string  $code
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function redirect($code)
    {
        $link = Link::where('short_code', $code)->first();

        if (!$link) {
            return response()->json([
                'success' => false,
                'message' => 'Short code not found.'
            ], 404);
        }

        // Increment click count
        $link->increment('clicks');

        return redirect()->away($link->original_url);
    }
}
